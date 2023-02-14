import style from './style.module.css';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: 'none'
    },
  };



  // function noClick() {
  //   setClickNo(false);
  // };
export function ProjectVoteButton () {
  /*for disables button */
  
 function clickNo() {
  let buttonOn = document.querySelectorAll('button');

for (let i = 0; i < buttonOn.length; i++) {
  buttonOn[i].onclick = function() {
    this.disabled = true;
  }
}

 } 



  /*modal window library */
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [click, setClickNo] = useState(true);
  function openModal() {
    // clickNo();
    setIsOpen(true);
    /*its for disabled buttons*/
    // setClickNo(false);

    
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }

    return (<>
        <button name="vote" id="project__vote_btn" className={style.project__btn} onClick={openModal}>Голосовать
        </button>

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 className={style.content__h2}>Спасибо за голос!</h2>
        <p className={style.content__text}>В данном конкурсе ты больше <span>не можешь</span> проголосовать :D</p>
        <button onClick={closeModal} className={style.content__btn}>Понятно</button>
      </Modal>
    </>)
}