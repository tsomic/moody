let faces
function init() {
    const $ = go.GraphObject.make

    faces = $(go.Diagram, 'facesDiv', {
        'undoManager.isEnabled': true,
    })

    faces.toolManager.draggingTool.isGridSnapEnabled = true

    faces.nodeTemplate = $(
        go.Node,
        'Auto',
        $(go.Shape, 'RoundedRectangle', {
            fill: 'white',
            portId: '',
            cursor: 'pointer',
            fromLinkable: true,
            fromLinkableSelfNode: true,
            fromLinkableDuplicates: true,
            toLinkable: true,
            toLinkableSelfNode: true,
            toLinkableDuplicates: true,
        }),
        $(
            go.Picture,
            {
                margin: 10,
                width: 80,
                height: 40,
            },
            new go.Binding('source', 'source')
        ),
        {
            toolTip: $(
                'ToolTip',
                $(go.TextBlock, new go.Binding('text', 'text'))
            ),
        },
        new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(
            go.Point.stringify
        )
    )

    faces.linkTemplate = $(
        go.Link,
        {
            toShortLength: 3,
            relinkableFrom: true,
            relinkableTo: true,
        },
        $(go.Shape, {
            isPanelMain: true,
            stroke: 'transparent',
            strokeWidth: 8,
        }),
        $(go.Shape, { isPanelMain: true }),
        $(go.Shape, { toArrow: 'Standard' }),
        {
            mouseEnter: function (e, link) {
                link.elt(0).stroke = 'rgba(0,90,156,0.3)'
            },
            mouseLeave: function (e, link) {
                link.elt(0).stroke = 'transparent'
            },
        }
    )
}
window.addEventListener('DOMContentLoaded', init)
