export default function handler(req, res) {
    res.status(200).json([
        {
            label: "Dashboard",
            url: "/",
            children: []
        },
        {
            label: "Item One",
            url: "/item/one",
            children: [
                {
                    label: "Item One - Child One",
                    url: "/item/one/child/one",
                    children: [
                        {
                            label: "Item One - Child One - Child One",
                            url: "/item/one/child/one/child/one"
                        }
                    ]
                },
                {
                    label: "Item One - Child Two",
                    url: "/item/one/child/one/child/two",
                    children: [
                        {
                            label: "Item One - Child Two - Child One",
                            url: "/item/one/child/two/child/one"
                        }
                    ]
                }
            ]
        },
        {
            label: "Item Two",
            url: "/item/two",
            children: []
        },
        {
            label: "Item Three",
            url: "/item/three",
            children: []
        },
        {
            label: "Item Four",
            url: "/item/four",
            children: [
                {
                    label: "Item Four - Child One",
                    url: "/item/four/child/one",
                    children: [
                        {
                            label: "Item Four - Child One - Child One",
                            url: "/item/four/child/one/child/one"
                        }
                    ]
                },
                {
                    label: "Item Four - Child Two",
                    url: "/item/four/child/two",
                    children: [
                        {
                            label: "Item Four - Child Two - Child One",
                            url: "/item/four/child/two/child/one"
                        }
                    ]
                }
            ]
        }
    ]);
}
