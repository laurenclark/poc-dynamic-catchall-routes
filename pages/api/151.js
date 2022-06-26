export default function handler(req, res) {
    res.status(200).json({
        id: 151,
        buttonText: "Click Me",
        isPortlet: true,
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt iaculis maximus. In vitae pharetra est. Curabitur nec gravida risus. Duis lacinia dolor urna. Curabitur eget nisl tortor. Quisque ac dictum massa. Sed et felis elit. Mauris eget convallis leo, a ullamcorper quam. Nulla accumsan, sapien id venenatis placerat, risus odio aliquam eros, finibus pharetra arcu tortor quis erat. Donec non massa id enim vulputate sagittis a vitae risus. Nulla egestas rutrum quam ac tempor. Quisque nec varius ipsum, in vestibulum arcu. Mauris elementum turpis quis ligula hendrerit fermentum"
    });
}
