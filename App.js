// const heading = React.createElement(
//     'h1',
//     {
//         id:'heading'
//     },
//     'Welcome from React');
/* <div id="header">
    <div id='child'>
        <h1 id="header">

        </h1>
    <div/>
</div> */
const parent = React.createElement(
    'div',
    {id:'parent'},
    [
        React.createElement(
            'div',
            {id:'child1'},
            React.createElement('h1',{id:'header'},'react header 1')
        ),
        // React.createElement(
        //     'div',
        //     {id:'child2'},
        //     React.createElement('h1',{id:'header'},'react header 2')
        // )
    ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)