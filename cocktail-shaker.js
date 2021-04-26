const {VerticalLayout, Randomize, Array1DTracer, Layout, Tracer, LogTracer, ChartTracer} = require("algorithm-visualizer")

tracer = new Array1DTracer()
chart  = new ChartTracer()

D = Randomize.Array1D({n:5})

tracer.set(D)
chart.set(D)

Layout.setRoot(new VerticalLayout([chart,tracer]))

function cocktailShakerSort(A) {
    do {
        swapped = false
        for (i = 0; i<D.length-2; i++) {
            if (D[i] > D[i + 1]) { // test whether the two elements are in the wrong order
                swap(A[i], A[i + 1]) // let the two elements change places
                swapped = true
            }
        }
        if (!swapped) {
            // we can exit the outer loop here if no swaps occurred.
            break
        }
        swapped = false
        for (i = 0; i<D.length-2; i++) {
            if (A[i] > A[i + 1] ) {
                swap(A[i], A[i + 1])
                swapped = true
            }
        }
    } while (swapped) // if no elements have been swapped, then the list is sorted
}

cocktailShakerSort()
