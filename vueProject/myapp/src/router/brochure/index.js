export default {
    path:"/brochure",
    component:()=>import("views/brochure"),
    name:"brochure",
    children:[
        {
            path:'fronted',
            component:()=>import("components/fronted"),
            name:"fronted",
        },
        {
            path:"backend",
            component:()=>import("components/backend"),
            name:"backend",
        }
    ]
}