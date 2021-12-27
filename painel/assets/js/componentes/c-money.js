
export default {
    template: `
	<div>
    <money v-model="price"
    v-bind="money"
    class="form-input input-lg"></money>
{{price}} oioii
    </div>
    `,


    data: function () {
		return {
            gravatar: '../painel/assets/image/gravatar.png'

        }
    },
   props:{
       msg: String
   }
}  

