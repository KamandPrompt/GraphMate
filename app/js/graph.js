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
        if ((edge == undefined) || (edge.name == undefined))
        {    
            return;
        }

        this.cy.add({
        group: 'edges',
        data: {name:  edge.name,source:edge.source,target:edge.target},
        }).css({
            'target-arrow-color':((edge.target-arrow-color ==undefined)? '#ccc':edge.target-arrow-color),
            'target-arrow-shape':((edge.target-arrow-shape ==undefined)? 'triangle':edge.target-arrow-shape),
            'line-color': ((edge.line-color == undefined) ? '#ccc' : edge.color),
            'width': ((edge.width == undefined) ? 3 : edge.width)
        });
        
        //Print the nodes 
        console.log(this.cy.edges());
    }
}

// An example for debugging
// var g = new Graph('cy');
// console.log(g);
// obj = {name:'saurabh', shape: 'octagon', color: 'cyan', width: '300px', height: '400px'};
// g.addNode(obj);
