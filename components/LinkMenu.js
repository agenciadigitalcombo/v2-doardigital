export default {
    props: ['link', 'ico','text'],
    template : "<a :href=\"'#/'+link\"> <i :class='ico'></i>  {{text}} </a> "
}