export default function handler(req, res) {
    res.status(200).json([
        {
            label: "Dashboard",
            url: "/",
            children: []
        },
        {
            label: "One",
            url: "/one",
            children: [
                {
                    label: "One - Child One",
                    url: "/one/child-one",
                    children: [
                        {
                            label: "One - Child One - Child One",
                            url: "/one/child-one"
                        }
                    ]
                },
                {
                    label: "One - Child Two",
                    url: "/one/child-two",
                    children: [
                        {
                            label: "One - Child Two - Child One",
                            url: "/one/child-two/child-one"
                        }
                    ]
                }
            ]
        },
        {
            label: "Two",
            url: "/two",
            children: []
        },
        {
            label: "Three",
            url: "/three",
            children: []
        },
        {
            label: "Four",
            url: "/four",
            children: [
                {
                    label: "Four - Child One",
                    url: "/four/child-one",
                    children: [
                        {
                            label: "Four - Child One - Child One",
                            url: "/four/child-one/child-one"
                        }
                    ]
                },
                {
                    label: "Four - Child Two",
                    url: "/four/child-two",
                    children: [
                        {
                            label: "Four - Child Two - Child One",
                            url: "/four/child-two/child-one"
                        }
                    ]
                }
            ]
        }
    ]);
}
