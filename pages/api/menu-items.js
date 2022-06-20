export default function handler(req, res) {
    res.status(200).json([
        {
            name: "Home",
            url: "/",
            children: []
        },
        {
            name: "Item One",
            url: "https://blah.com",
            children: [
                {
                    name: "Item One - Child One",
                    url: "https://blah.com",
                    children: [
                        {
                            name: "Item One - Child One - Child One",
                            url: "https://blah.com"
                        }
                    ]
                },
                {
                    name: "Item One - Child One - Child Two",
                    url: "https://blah.com",
                    children: [
                        {
                            name: "Item One - Child Two - Child One",
                            url: "https://blah.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Item Two",
            url: "https://blah.com",
            children: []
        },
        {
            name: "Item Three",
            url: "https://blah.com",
            children: []
        },
        {
            name: "Item Four",
            url: "https://blah.com",
            children: [
                {
                    name: "Item Four - Child One",
                    url: "https://blah.com",
                    children: [
                        {
                            name: "Item Four - Child One - Child One",
                            url: "https://blah.com"
                        }
                    ]
                },
                {
                    name: "Item Four - Child One - Child Two",
                    url: "https://blah.com",
                    children: [
                        {
                            name: "Item Four - Child Two - Child One",
                            url: "https://blah.com"
                        }
                    ]
                }
            ]
        }
    ]);
}
