import books from '../assets/books.jpg'
import centrum from '../assets/centrum.jpg'
import mobile from '../assets/mobile.jpg'
import admin_zaw from '../assets/admin_zaw.png'


const projects = () => {

    return [
        {
            id: 1,
            title: "ZawFinance.Com",
            description: "Cras quis euismod ipsum. Proin ac neque tortor. Duis porttitor scelerisque sapien, eu cursus nibh ornare et. Nullam vitae ornare metus, sit amet blandit turpis. Aenean rhoncus at est sed efficitur. Donec laoreet arcu non mi aliquam, id ornare mi maximus. Pellentesque ut molestie dolor. Quisque neque ante, pretium non pharetra a, viverra sit amet augue. Nulla eget gravida mi. Nunc condimentum tellus ante, nec porta enim aliquam ac. Aliquam in pharetra enim. Aenean quis nisi nec mauris consectetur gravida. Donec non aliquet sapien, nec auctor nisi.",
            url: `${ admin_zaw }`,
            source: 'https://github.com/EricSei/zawfinances'
        },
        {
            id: 2,
            title: "Book Tracker",
            description: "Cras quis euismod ipsum. Proin ac neque tortor. Duis porttitor scelerisque sapien, eu cursus nibh ornare et. Nullam vitae ornare metus, sit amet blandit turpis. Aenean rhoncus at est sed efficitur. Donec laoreet arcu non mi aliquam, id ornare mi maximus. Pellentesque ut molestie dolor. Quisque neque ante, pretium non pharetra a, viverra sit amet augue. Nulla eget gravida mi. Nunc condimentum tellus ante, nec porta enim aliquam ac. Aliquam in pharetra enim. Aenean quis nisi nec mauris consectetur gravida. Donec non aliquet sapien, nec auctor nisi.",
            url: `${ mobile }`,
            source: 'https://github.com/EricSei/zawfinances'
        },
        {
            id: 3,
            title: "Loreum Ipsum 3",
            description: "Cras quis euismod ipsum. Proin ac neque tortor. Duis porttitor scelerisque sapien, eu cursus nibh ornare et. Nullam vitae ornare metus, sit amet blandit turpis. Aenean rhoncus at est sed efficitur. Donec laoreet arcu non mi aliquam, id ornare mi maximus. Pellentesque ut molestie dolor. Quisque neque ante, pretium non pharetra a, viverra sit amet augue. Nulla eget gravida mi. Nunc condimentum tellus ante, nec porta enim aliquam ac. Aliquam in pharetra enim. Aenean quis nisi nec mauris consectetur gravida. Donec non aliquet sapien, nec auctor nisi.",
            url: `${ mobile }`,
            source: 'https://github.com/EricSei/zawfinances'
        }
    ]
}

export default projects;