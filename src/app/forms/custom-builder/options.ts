export const options = {
  builder: {
    basic: false,
    data: false,
    premium: false,
    customBasic: {
      title: 'Basic Components',
      default: true,
      weight: 0,
      components: {
        textfield: true,
        textarea: true,
        email: true
      }
    },
    advanced: {
      components: {
        email: false,
        url: false,
        tags: false,
        address: false,
        survey: false,
        currency: false,
        signature: false,
        day: false,
        phoneNumber: false,
        datetime: false
      }
    },
    layout: {
      title: 'Layout Components',
      weight: 0,
      components: {
        panel: true,
        table: false,
        tabs: false,
        well: false,
        columns: false,
        fieldset: false,
        content: false,
        htmlelement: false
      }
    }
  },
  language: 'jp',
  i18n: {
    jp: {
      'Label': 'ラベル',
      'Label Position': 'ラベルの位置',
      'Placeholder': 'プレースホルダー',
      'Description': '説明文',
      'Tooltip': 'ツールチップ',
      'Prefix': '接頭辞',
      'Suffix': 'サフィックス',
      'Widget': 'ウィジェット',
      'Input Mask': '定型入力',
      'Custom CSS Class': 'カスタムCSSクラス',
      'Tab Index': 'タブインデックス',
      'Hidden ': '隠された',
      'Hide Label': 'ラベルを非表示',
      'Show Word Counter': 'ワードカウンターを表示',
      'Show Character Counter': 'キャラクターカウンターを表示',
      'Hide Input': '入力を非表示',
      'Excellent': 'Excelente',
      'Initial Focus': '最初の焦点',
      'Allow Spellcheck': 'スペルチェックを許可',
      'Disabled': '無効',
      'Table View': 'テーブルビュー',
      'Modal Edit': 'モーダル編集',
      'Multiple Values': '複数の値',
      'Persistent': '持続的',
      'Input Format': '入力フォーマット',
      'Protected': '保護された',
      'Database Index': 'データベースインデックス',
      'Mixed (Allow upper and lower case)': '混合（大文字と小文字を許可）',
      'Uppercase': '大文字',
      'Lowercase': '小文字',
      'Encrypted (Enterprise Only)': '暗号化（エンタープライズのみ）',
      'Default Value': 'デフォルト値',
      'Drag and Drop a form component': 'フォームコンポーネントをドラッグアンドドロップする',
      'Text Field': 'テキストフィールド',
      'Email': '電子メイル',
      'Text Area': 'テキスト領域',
      'Panel': 'パネル',
      'Time': '時間',
      'Submit': '参加する',
      'Basic Components': '基本的なコンポーネント',
      'Layout Components': 'レイアウトコンポーネント',
      'Advanced': '高度な',
      'Hidden': '隠された',
      'Component': '成分',
      'Display': '表示',
      'Data': 'データ',
      'Validation': '検証',
      'API': 'アプリケーションプログラミングインターフェース',
      'Conditional': '条件付き',
      'Logic': '論理',
      'Layout': 'レイアウト',
      'Allow Multiple Masks': '複数のマスクを許可',
      'Input Field': '入力フィールド',
      'Top': '上',
      'Input Type': '入力方式',
      'Collapsible': '折りたたみ'
    }
  }
};
