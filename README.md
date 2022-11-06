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
        2: 

    3: Ref Hook: React.useRef() 