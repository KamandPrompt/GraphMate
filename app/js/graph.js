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
    addEdge(source,target,index)
    {
        this.cy.add({
        data: {
            id: 'edge' + index,
            source: source,
            target: target
              }
        });
    }
}
// An example for debugging
// var g = new Graph('cy');
// console.log(g);
// obj = {name:'saurabh', shape: 'octagon', color: 'cyan', width: '300px', height: '400px'};
// g.addNode(obj);
