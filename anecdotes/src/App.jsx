import {useState} from 'react'

const Button = ({handler, text}) => {
    return (
        <button onClick={handler}>{text}</button>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(8).fill(0))
    const anecdoteHandler = () => {
        if (selected < anecdotes.length - 1) {
            setSelected(selected + 1)
        } else {
            setSelected(0)
        }
    }

    const bestRated = () => {
        let max = -1
        let maxIndex = -1
        for( let i = 0; i < anecdotes.length; i++) {
            if (votes[i] > max) {
                max = votes[i]
                maxIndex = i
            }
        }
        return maxIndex
    }

    const bestRatedAnecdote = bestRated()
    const voteHandler = () => {
        const temp = {...votes}
        temp[selected]++
        setVotes(temp)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <div>
                <Button handler={voteHandler} text={"vote"}/>
                <Button handler={anecdoteHandler} text={"next anecdote"}/>
            </div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[bestRatedAnecdote]}</p>
        </div>
    )
}
export default App