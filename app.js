const parent = React.createElement("div",{id: "parent_div"},
                    [React.createElement("div",{id:"child1_div"},
                    [ React.createElement("h1",{id:"sub1_child"},"i am a child of sub h1 div!"),
                      React.createElement("h2",{id:"sub2_child"},"i am a child of sub h2 div!")
                    ]),
                    React.createElement("div",{id:"child2_div"},
                        [ React.createElement("h1",{id:"sub1_child"},"i am a child of sub h11 div!"),
                          React.createElement("h2",{id:"sub2_child"},"i am a child of sub h12 div!")
                        ])
                    ]
                    );


//const heading = React.createElement("h1", {id:"heading"}, "my first react program!!");         //create element takes 3 argument    i. what tag  
                                                                                    // ii. object 
                                                                                   // iii.what to put in tag
        
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);