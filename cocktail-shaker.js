const {VerticalLayout, Randomize, Array1DTracer, Layout, Tracer, LogTracer, ChartTracer} = require("algorithm-visualizer")

tracer = new Array1DTracer()
chart  = new ChartTracer()

D = Randomize.Array1D({n:5})

tracer.set(D)
chart.set(D)

Layout.setRoot(new VerticalLayout([chart,tracer]))

function swap(i1, i2) {
    let a = D[i1]
    let b = D[i2]
    D[i2] = a;
    D[i1] = b;
}

function cocktailShakerSort() {
    do {
        swapped = false
        for (i = 0; i<D.length-2; i++) {
            chart.select(i)
            chart.select(i+1)
            tracer.select(i)
            tracer.select(i+1)
            
            if (D[i] > D[i + 1]) { // test whether the two elements are in the wrong order
                swap(i,i + 1) // let the two elements change places
                swapped = true
                chart.patch(i, D[i])
                chart.patch(i+1,D[i+1])
            }
            
            Tracer.delay()
            chart.deselect(i)
            chart.deselect(i+1)
            tracer.deselect(i)
            tracer.deselect(i+1)
            chart.depatch(i)
            chart.depatch(i+1)
        }
        if (!swapped) {
            // we can exit the outer loop here if no swaps occurred.
            break
        }
        swapped = false
        for (i = 0; i<D.length-2; i++) {
            chart.select(i)
            chart.select(i+1)
            tracer.select(i)
            tracer.select(i+1)
            
            if (D[i] > D[i + 1] ) {
                swap(i, i + 1)
                swapped = true
                chart.patch(i, D[i])
                chart.patch(i+1,D[i+1])
            }
            
            Tracer.delay()
            chart.deselect(i)
            chart.deselect(i+1)
            tracer.deselect(i)
            tracer.deselect(i+1)
            chart.depatch(i)
            chart.depatch(i+1)
        }
    } while (swapped) // if no elements have been swapped, then the list is sorted
}

cocktailShakerSort()
