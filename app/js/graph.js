// Adding the cytoscape module
const cytoscape = require('cytoscape');

// Graph class
class Graph
{
    constructor (containerId)
    {   
        //Empty cytoscape object
        this.cy = cytoscape({
            container: document.getElementById(containerId),
        });
    }

    //Function to add new node
    addNode(node)
    {   
        if ((node == undefined) || (node.name == undefined))
        {    
            return;
        }

        this.cy.add({
        group: 'nodes',
        data: {name:  node.name},
        }).css({
            'shape':((node.shape == undefined) ? 'rectangle' : node.shape),
            'background-color': ((node.color == undefined) ? 'gray' : node.color),
            'label': node.name,
            'width': ((node.width == undefined) ? '50px' : node.width),
            'height': ((node.height == undefined) ? '50px' : node.height),
        });
        
        //Print the nodes 
        console.log(this.cy.nodes());
    }
    addEdge(edge)
    {
        if ((edge == undefined) || (edge.name == undefined) || (edge.source == undefined) || (edge.target == undefined))
        {    
            return;
        }

        this.cy.add({
        group: 'edges',
        data: {name:  edge.name,source:edge.source,target:edge.target},
        }).css({
            'target-arrow-color':((edge.color ==undefined)? '#ccc':edge.color),
            'target-arrow-shape':((edge.shape ==undefined)? 'triangle':edge.shape),
            'line-color': ((edge.color == undefined) ? '#ccc' : edge.color),
            'width': ((edge.width == undefined) ? 3 : edge.width)
        });

        //Print the nodes 
        console.log(this.cy.edges());
    }
}
