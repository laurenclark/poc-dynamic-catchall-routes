export default function handler(req, res) {
    res.status(200).json([
        {
            label: "Home",
            url: "/",
            children: []
        },
        {
            label: "Item One",
            url: "https://blah.com",
            children: [
                {
                    label: "Item One - Child One",
                    url: "https://blah.com",
                    children: [
                        {
                            label: "Item One - Child One - Child One",
                            url: "https://blah.com"
                        }
                    ]
                },
                {
                    label: "Item One - Child One - Child Two",
                    url: "https://blah.com",
                    children: [
                        {
                            label: "Item One - Child Two - Child One",
                            url: "https://blah.com"
                        }
                    ]
                }
            ]
        },
        {
            label: "Item Two",
            url: "https://blah.com",
            children: []
        },
        {
            label: "Item Three",
            url: "https://blah.com",
            children: []
        },
        {
            label: "Item Four",
            url: "https://blah.com",
            children: [
                {
                    label: "Item Four - Child One",
                    url: "https://blah.com",
                    children: [
                        {
                            label: "Item Four - Child One - Child One",
                            url: "https://blah.com"
                        }
                    ]
                },
                {
                    label: "Item Four - Child One - Child Two",
                    url: "https://blah.com",
                    children: [
                        {
                            label: "Item Four - Child Two - Child One",
                            url: "https://blah.com"
                        }
                    ]
                }
            ]
        }
    ]);
}
