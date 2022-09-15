export default function(link = '', ico = 'fa-solid fa-info', color= 'blue') {
    return `<a href="#/${link}" class="w-4 mr-2 transform hover:text-${color}-500 hover:scale-110">
        <i class="${ico}"></i>
    </a>`
}