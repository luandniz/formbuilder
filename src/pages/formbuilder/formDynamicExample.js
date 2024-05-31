const randomId = () => {
  return Math.floor(Date.now() * Math.random()).toString(36)
}

export const form = [
  {
    id: 'initial_content',
    title: 'Container',
    name: '',
    component: 'Div',
    group: 'structure',
    icon: 'fas fa-columns',
    placeholder: false,
    children: [
      {
        isFirst: true
      },
      {
        id: randomId(),
        title: 'Texto',
        component: 'T',
        type: null,
        group: 'element',
        icon: 'title',
        placeholder: false,
        dense: true,
        contentType: 'fix',
        content: 'CHECKLIST FROTA',
        dataSourceId: null,
        propertyId: null,
        styles: {
          width: '100%',
          textAlign: 'center',
          color: '#1874cf',
          fontSize: 20,
          fontWeight: 900,
          marginTop: 0,
          marginBottom: 0,
          marginRight: 0,
          marginleft: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        },
        dragging: true
      },

      {
        id: 'dtkot5d4',
        title: 'Filial',
        label: 'Filial',
        model: null,
        component: 'S',
        group: 'property',
        icon: 'fas fa-font-case',
        dense: true,
        multiple: false,
        isRequired: true,
        options: [
          { label: 'Aracaju', value: 1 },
          { label: 'Belo Horizonte', value: 2 }
        ],
        useChips: false,
        optionLabel: 'label',
        optionValue: 'value',
        emitValue: true,
        clearable: true,
        counter: false,
        behavior: 'dialog',
        hint: null,
        style: {
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        },
        dragging: true
      },
      {
        id: '511qovd9',
        title: 'Placa',
        label: 'Placa',
        model: null,
        parentRequired: true,
        parent: 'dtkot5d4',
        component: 'S',
        group: 'property',
        icon: 'fas fa-font-case',
        dense: true,
        multiple: false,
        isRequired: true,
        options: [
          { label: 'ANA9E07', value: 1 },
          { label: 'AQH5228', value: 2 },
          { label: 'AQQ5484', value: 3 },
          { label: 'AQR2262', value: 4 }
        ],
        useChips: false,
        optionLabel: 'label',
        optionValue: 'value',
        emitValue: true,
        clearable: true,
        counter: false,
        behavior: 'dialog',
        hint: null,

        style: {
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        },
        dragging: true
      },

      {
        id: 'kqamdsvw',
        title: 'Modelo',
        label: 'Modelo do veículo',
        model: null,
        parentRequired: true,
        parent: '511qovd9',
        component: 'S',
        group: 'property',
        icon: 'fas fa-font-case',
        dense: true,
        multiple: false,
        isRequired: true,
        options: [
          { label: 'Modelo 1', value: 1 },
          { label: 'Modelo 2', value: 2 },
          { label: 'Modelo 3', value: 3 },
          { label: 'Modelo 4', value: 4 }
        ],
        useChips: false,
        optionLabel: 'label',
        optionValue: 'value',
        emitValue: true,
        clearable: true,
        counter: false,
        behavior: 'dialog',
        hint: null,
        readonly: true,
        style: {
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        },
        dragging: true
      },
      {
        id: randomId(),
        title: 'Hodômetro',
        label: 'Hodômetro',
        model: null,
        component: 'I',
        type: 'text',
        group: 'property',
        icon: 'fas fa-font-case',
        clearable: true,
        placeholder: '',
        prefix: null,
        suffix: null,
        hint: null,
        color: null,
        dense: true,
        isRequired: true,
        style: {
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          marginLeft: 5,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        },
        dragging: true
      },

      // ***************************************
      {
        id: 18,
        title: 'Section',
        name: '',
        component: 'Section',
        type: null,
        group: 'structure',
        icon: 'fas fa-columns',
        placeholder: false,
        children: [
          {
            isFirst: true
          },
          {
            id: 23,
            title: 'Icon',
            component: 'Icon',
            type: null,
            group: 'element',
            icon: 'fas fa-thumbs-up',
            iconName: 'fas fa-check-circle',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              fontSize: 30,
              color: '#1874cf',
              textAlign: 'center',
              marginTop: 5,
              marginBottom: 5
            },
            dragging: true
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 3,
              backgroundColor: '#1874cf',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 20,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Pneus/Estepe calibrados:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0,
              width: '100%'
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Pneus/Estepe:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Lâmpadas:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Troca de óleo:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Vidros (Lanterna/Parabrisa/Farol):',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Baú:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Fitas Refletivas:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Nível da água:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          },
          {
            id: 23,
            title: 'Separador',
            component: 'Hr',
            type: null,
            group: 'element',
            icon: 'horizontal_rule',
            placeholder: false,
            color: null,
            dense: true,
            styles: {
              width: '100%',
              height: 1,
              backgroundColor: '#e5e5e5',
              borderTopWidth: 0,
              marginTop: 10,
              marginBottom: 5,
              marginRight: 0,
              marginleft: 0
            },
            dragging: true
          },
          {
            id: randomId(),
            title: 'Tacógrafos:',
            label: 'Salvar',
            component: 'BTT',
            model: 'N',
            type: null,
            group: 'element',
            icon: 'smart_button',
            placeholder: false,
            color: null,
            dense: true,
            options: [
              { label: 'Sim', value: 'Y' },
              { label: 'Não', value: 'N' }
            ],
            style: {
              marginTop: 0,
              marginBottom: 0,
              marginRight: 0,
              marginleft: 0,
              paddingTop: 0,
              paddingBottom: 0,
              paddingRight: 0,
              paddingLeft: 0
            }
          }
        ],
        groups: ['property', 'element', 'structure'],
        color: null,
        dense: true,
        styles: {
          height: '100%',
          width: '100%',
          alignItems: '',
          color: '',
          fontSize: '',
          marginTop: 0,
          marginBottom: 0,
          marginRight: 0,
          marginleft: 0,
          paddingTop: 5,
          paddingBottom: 5,
          paddingRight: 10,
          paddingLeft: 10,
          backgroundColor: '',
          borderWidth: 0,
          borderStyle: null,
          borderColor: null,
          borderTopLeftRadius: null,
          borderTopRightRadius: null,
          borderBottomRightRadius: null,
          borderBottomLeftRadius: null
        },
        dragging: true
      },
      {
        id: randomId(),
        title: 'textarea',
        label: 'Irregularidades',
        model: 'Testes',
        component: 'I',
        type: 'textarea',
        group: 'property',
        icon: 'fas fa-font-case',
        placeholder: '',
        prefix: null,
        suffix: null,
        hint: null,
        color: null,
        dense: true,
        style: {
          marginTop: 20,
          marginBottom: 5,
          marginRight: 0,
          marginLeft: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 5,
          paddingLeft: 5
        },
        dragging: true
      },
      {
        id: 23,
        title: 'Separador',
        component: 'Hr',
        type: null,
        group: 'element',
        icon: 'horizontal_rule',
        placeholder: false,
        color: null,
        dense: true,
        styles: {
          width: '100%',
          height: 1,
          backgroundColor: '#e5e5e5',
          borderTopWidth: 0,
          marginTop: 10,
          marginBottom: 5,
          marginRight: 0,
          marginleft: 0
        },
        dragging: true
      },
      {
        id: randomId(),
        label: 'Fotos das Irregularidades',
        component: 'FileUploader',
        group: 'element',
        icon: 'backup',
        square: false,
        color: 'teal-6',
        textColor: 'white',
        acceptedFiles: 'image/*',
        action: null,
        style: {
          marginTop: 5,
          marginBottom: 20,
          marginRight: 5,
          marginLeft: 5,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        }
      },

      {
        id: randomId(),
        title: 'Botão',
        label: 'Salvar',
        component: 'B',
        type: null,
        group: 'element',
        icon: 'smart_button',
        placeholder: false,
        color: null,
        dense: true,
        action: 'save',
        style: {
          marginTop: 0,
          marginBottom: 0,
          marginRight: 0,
          marginleft: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        }
      }
    ],
    groups: ['property', 'element', 'structure'],
    color: null,
    dense: true,
    styles: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '',
      borderWidth: null,
      borderStyle: null,
      borderColor: null,
      borderTopLeftRadius: null,
      borderTopRightRadius: null,
      borderBottomRightRadius: null,
      borderBottomLeftRadius: null,
      paddingTop: 5,
      paddingBottom: 30,
      paddingRight: 5,
      paddingLeft: 5
    },
    dragging: false
  }
]
