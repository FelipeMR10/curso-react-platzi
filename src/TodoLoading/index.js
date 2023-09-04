import  CircularProgress  from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"

function TodoLoading () {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
            <CircularProgress />
        </Box>
    )
}

export { TodoLoading }

// import './TodoLoading.css'

// function TodoLoading() {
//     return (
//         <div className='LoadingTodo-container'>
//             <span className='LoadingTodo-completeIcon'></span>
//             <p className='LoadingTodo-text'></p>
//             <span className='LoadingTodo-deleteIcon'></span>
//         </div>
//     )
// }

