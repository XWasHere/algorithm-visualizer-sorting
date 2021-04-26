const {VerticalLayout, Randomize, Array1DTracer, Layout, Tracer, LogTracer, ChartTracer} = require("algorithm-visualizer")

tracer = new Array1DTracer()
ct = new ChartTracer()

Layout.setRoot(new VerticalLayout([ct,tracer]));

D=Randomize.Array1D({ N: 6 });
tracer.set(D)
ct.set(D)

function shuffle() {
    D = D.sort((a, b) => 0.5 - Math.random());
    tracer.set(D);
    ct.set(D)
    Tracer.delay();
}

function in_order() {
    let li
    fail = false
    D.forEach((i,ii) => {
        if(!fail) {
            tracer.select(ii)
//            Tracer.delay()
        }
        if (li) {
            if (i < li) {
                fail = true
            }
        }
        li = i
    })
    return !fail
}

while (!in_order()) {
    shuffle()
}
