export const overlappingModes = ['rotate', 'stagger' , 'hide', 'none'];

export const payload = [
    {
        "key": "JavaScript",
        "val": 21541
    },
    {
        "key": "TypeScript",
        "val": 49824
    },
    {
        "key": "TypeScript JSX",
        "val": 9875
    },
    {
        "key": "JSON",
        "val": 4274
    },
    {
        "key": "Next.js",
        "val": 1213
    },
    {
        "key": "GitIgnore file",
        "val": 1001
    },
    {
        "key": "Markdown",
        "val": 713
    },
    {
        "key": "CSS",
        "val": 453
    },
    {
        "key": "XML",
        "val": 249
    },
    {
        "key": "JSX",
        "val": 129
    },
    {
        "key": "tsconfig",
        "val": 120
    },
    {
        "key": "SVG",
        "val": 65
    },
    {
        "key": "SourceMap",
        "val": 40
    },
    {
        "key": "PATCH",
        "val": 28
    },
    {
        "key": "PLAIN_TEXT",
        "val": 20
    },
    {
        "key": ".env file",
        "val": 13
    },
    {
        "key": "prototext",
        "val": 1
    }
];

export const population = gerarPercentual(payload, 'val', 500);

function gerarPercentual(payload, keyValue, filterValue) {
//filtrar valores irrisorios
    const payload_1 = payload.filter(item => item[keyValue] > filterValue)

//calcular total
    const total = payload_1.reduce((acc, item) => acc + item[keyValue], 0)

//criar percentual
    return payload_1.map(item => {
            item.percent = Number((item[keyValue] / total * 100).toFixed(2))
            return item
        }
    );
}