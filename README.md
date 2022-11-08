1:  setState is async function:

    1: Why is that? 
        setState({count:count+1})
        console.log(this.state.count)
        The log result is not gonna update immeditately, because the setState is async function.

    2: how to solve? 

        setState(updater[, callback])

        the callback function can access the latest result after updating state

          this.setState(() => {
            const { count } = this.state
            if (count >= 5) {
                return { count: count - 5 }
            }
            else {
                return { count: count + 1 }
            }
        }, () => {
            console.log(this.state.count);
        })

2: setState have two type:

    1: object setState? 
        setState({count:count+1})

    2: functional setState? 

        this.setState(() => ({ count: 99 }))

        setState(()=>{
            return {count:count+!}
        })

        1: functional setState contains state and props

            setState((state,props)=>{
            return {count:state.count+props.x}
            })

3: How to use setState?

    1: If new state is not dependened on previous state ,we use object setState


4: What is React hooks? 

    1: Hooks are only used in functional component

    2: functional component does not have "this"

5: Three common hooks:

    1: State hook : React.useState ()

        const[count,setCount]=React.useState({name:'longy',age:25})
        setCount(count=>({...count,age:count.age+1}))



    2: Effect Hook ： React.useEffect()

        1: Class component has the component life cycle, but the functional component does not have it.
        2: useEffect has three parts,
            useEffect(()=>{
            
            },
            return()
            
            ,[])

    3: Ref Hook: React.useRef() 



6: Fragment:

    1: Fragement will minimize the div on DOM, if you need div to wrap many node together, it is better to use fragement


7: UseContext:
    
    1: UseContext allow you to communicate between component
    2: we define the useContext then export it 
    3: useContext.Provider to define exporting values in parent component, if you want to export more value ,it is better to use object type 
    <useContext.provider value={{name:name,user:user}}></useContext.provider>
    4: call the React.useContext(UserContext)
    5: Using Consumer is good way to return value 
            <UserContext.Consumer>
                {
                    value => {
                        return `my name :${value.name}, my age: ${value.age}`
                    }
                }
            </UserContext.Consumer>

8: Optimize:

    Problem?

    1: Even though the child component did not use anything from parent component, the child component is stil rendered 

    Solution:

    1: When state and props is changed, then render the child component

    2: Use React.memo to wrap the function

9: Render_props:

    1: Two components A and B
    2: <A><B><A/> structure can not pass value from A to B
    3: using render props concept to pass from A to B

10: Error boundary:

    