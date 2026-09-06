import {Box, Modal} from "@mui/material";

export const ModalWindow = ({data, open, handleClose})=>{
    return (
        <Modal open={open} onClose={handleClose}>
         <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          padding: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         }}>
          <h2>Успешно зарегистрировано</h2>
          <p>JSON:</p>
          <p className={'result'}> {JSON.stringify(data, null, 2)}</p>
         </Box>
        </Modal>
    )
 }