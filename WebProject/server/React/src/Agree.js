import Modal from '@mui/material/Modal'
import React, { useState } from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Agree.css';

export default function Agree() {

    const style = {
        position: 'fixed',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 10,
        p: 5,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button className="dirrhks" size="small" variant="outlined" onClick={handleOpen}>약관 보기</Button>
        <Modal open={open} className="sign_box" onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
            <typography id="modal-modal-title" variant="outlined" component="h2">
                <Typography component="h2" variant="h5" className="title">  개인정보 동의에 대한 약관 </Typography> <br/>
                       <h2> Ⅰ. 개인정보의 수집 및 이용 동의서</h2>
                    - 이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다. <br/><br/>
                    <h3> 개인정보 수집 항목 및 수집·이용 목적 </h3>
                    <h4>가) 수집 항목 (필수항목)</h4>
                    - 아이디, 비밀번호, 전화번호(휴대전화), 사는 곳 <br/>
                    <h4>나) 수집 및 이용 목적 </h4>
                    - 회원 개인 식별 <br/>
                    - 고지사항 전달 <br/>
                    - 회원들과의 원활한 의사소통 <br/>
                     <h4>② 개인정보 보유 및 이용기간</h4>
                    - 회원 탈퇴를 할 때까지
                    <h4>③ 동의거부관리</h4>
                    - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만,
                    귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 해당 서비스 이용에 있어 불이익이 발생할 수
                    있음을 알려드립니다. <br/><br/>
            </typography>
            <Button className="exit" type="button" onClick={handleClose} variant="outlined">닫기</Button>
            </Box>
        </Modal>
        </div>
    )
}