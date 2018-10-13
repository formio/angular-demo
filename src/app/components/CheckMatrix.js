/**
 * This file shows how to create a custom component and register that within an Angular application.
 *
 * Get the base component class by referencing Formio.Components.components map.
 */
import BaseComponent from 'formiojs/components/base/Base';
import TableComponent from 'formiojs/components/table/Table';
import Components from 'formiojs/components/Components';

/**
 * Create a new CheckMatrixComponent "class" using ES5 class inheritance notation.
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Here we will derive from the base component which all Form.io form components derive from.
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class CheckMatrixComponent extends BaseComponent {

  /**
   * Define what the default JSON schema for this component is. We will derive from the BaseComponent
   * schema and provide our overrides to that.
   * @return {*}
   */
  static schema() {
    return BaseComponent.schema({
      type: 'checkmatrix',
      numRows: 3,
      numCols: 3
    });
  }

  /**
   * Register this component to the Form Builder by providing the "builderInfo" object.
   */
  static get builderInfo() {
    return {
      title: 'Check Matrix',
      group: 'basic',
      icon: 'fa fa-table',
      weight: 70,
      documentation: 'http://help.form.io/userguide/#table',
      schema: CheckMatrixComponent.schema()
    };
  }

  /**
   * Tell the renderer how to build this component using DOM manipulation.
   */
  build() {
    this.element = this.ce('div', {
      class: 'table-responsive'
    });
    this.createLabel(this.element);

    var tableClass = 'table ';
    ['striped', 'bordered', 'hover', 'condensed'].forEach(function(prop) {
      if (this.component[prop]) {
        tableClass += `table-${prop} `;
      }
    }.bind(this));

    var table = this.ce('table', {
      class: tableClass
    });

    // Build the body.
    var tbody = this.ce('tbody');
    this.inputs = [];
    this.checks = [];
    for (let i = 0; i < this.component.numRows; i++) {
      var tr = this.ce('tr');
      this.checks.push([]);
      for (let j = 0; j < this.component.numCols; j++) {
        var td = this.ce('td');
        this.checks[i][j] = this.ce('input', {
          type: 'checkbox'
        });
        this.addInput(this.checks[i][j], td);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    this.element.appendChild(table);
  }

  /**
   * Provide the input element information. Because we are using checkboxes, the change event needs to be
   * 'click' instead of the default 'change' from the BaseComponent.
   *
   * @return {{type, component, changeEvent, attr}}
   */
  elementInfo() {
    const info = super.elementInfo();
    info.changeEvent = 'click';
    return info;
  }

  /**
   * Tell the renderer how to "get" a value from this component.
   *
   * @return {Array}
   */
  getValue() {
    var value = [];
    this.checks.forEach((row, rowIndex) => {
      value[rowIndex] = [];
      row.forEach((col, colIndex) => {
        value[rowIndex][colIndex] = !!col.checked;
      });
    });
    return value;
  }

  /**
   * Tell the renderer how to "set" the value of this component.
   *
   * @param value
   * @return {boolean}
   */
  setValue(value) {
    if (!value) {
      return;
    }
    this.checks.forEach((row, rowIndex) => {
      if (!value[rowIndex]) {
        return false;
      }
      row.forEach((col, colIndex) => {
        if (!value[rowIndex][colIndex]) {
          return false;
        }
        let checked = value[rowIndex][colIndex] ? 1 : 0;
        col.value = checked;
        col.checked = checked;
      });
    });
  }
}

// Use the table component edit form.
CheckMatrixComponent.editForm = TableComponent.editForm;

// Register the component to the Formio.Components registry.
Components.addComponent('checkmatrix', CheckMatrixComponent);
