export default function handler(req, res) {
    res.status(200).json([
        {
            name: "Dashboard",
            url: "/",
            children: []
        },
        {
            name: "One",
            url: "/one",
            children: [
                {
                    name: "One - Child One",
                    url: "/one/child-one",
                    children: [
                        {
                            name: "One - Child One - Child One",
                            url: "/one/child-one"
                        }
                    ]
                },
                {
                    name: "One - Child Two",
                    url: "/one/child-two",
                    children: [
                        {
                            name: "One - Child Two - Child One",
                            url: "/one/child-two/child-one"
                        }
                    ]
                }
            ]
        },
        {
            name: "Two",
            url: "/two",
            children: []
        },
        {
            name: "Three",
            url: "/three",
            children: []
        },
        {
            name: "Four",
            url: "/four",
            children: [
                {
                    name: "Four - Child One",
                    url: "/four/child-one",
                    children: [
                        {
                            name: "Four - Child One - Child One",
                            url: "/four/child-one/child-one"
                        }
                    ]
                },
                {
                    name: "Four - Child Two",
                    url: "/four/child-two",
                    children: [
                        {
                            name: "Four - Child Two - Child One",
                            url: "/four/child-two/child-one"
                        }
                    ]
                }
            ]
        }
    ]);
}
