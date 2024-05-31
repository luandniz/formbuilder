import form from '../utils/form';
function mountInportComponent(){

        let components = {}

        for(let item of form){
            let component =  () => import(`./${item.component}Component.vue`)
            components[`${item.component}Component`]  =  component();
        }

        return components
}

export default mountInportComponent();