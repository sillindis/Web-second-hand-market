import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import '../signup.css';
import Agree from './Agree';

const style = {
    position: 'fixed',
    top:'45%',
    left:'50%',
    transform:'translate(-50%, -50%)',
    width: '20%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Signup() {
    const [id,setId] = useState('');
    const [idError, setIdError] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setId(null);
        setPassword(null);
        setPasswordCheck(null);
        setTerm(null);
    }
    const [password,setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);
    const [term,setTerm] = useState(false);
    const handleClose = () => setOpen(false);

    const onChangeId = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordChk = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if (!id) {
            return setIdError(true);
        }
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        handleClose();
    };

    return (
        <div>
        <Button className="signup" onClick={handleOpen} variant="outlined">회원가입</Button>
        <Modal open={open} className="modal_box" onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <typography id="modal-modal-title" variant="outlined" component="h2">
                    <Typography component="h1" variant="h5" className="title">  회원가입 </Typography> <br/>
                    <h3>개인정보 동의 및 약관</h3> <Agree />
                    <Checkbox  className="checkbox" value={term} onChange={onChangeTerm}></Checkbox> 동의<br/>
                    {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다<br/></div>}
                    <br/>
                    <TextField className="Id" value={id} label="ID" required onChange={onChangeId}></TextField> <br/> <br/>
                    {idError && <div style={{color : 'red'}}>아이디를 입력하셔야 합니다<br/><br/></div>}
                    <TextField className="pwd" value={password} label="Password" type="password" required name="password" onChange={onChangePassword} /> <br/> <br/>
                    <TextField className="pwd_check" value={passwordCheck}label="Password Check" type="password" required name="password" onChange={onChangePasswordChk}/>
                    {passwordError && <div style={{color : 'red '}}>비밀번호가 일치하지 않습니다</div>} <br/><br/>
                    <Button className="ok" type="submit" onClick={onSubmit} htmlType="submit" variant="contained">가입</Button> &nbsp;
                    <Button className="cancel" type="button" onClick={handleClose} variant="outlined">취소</Button>
                    </typography>
            </Box>
        </Modal>
        </div>
    )
}
