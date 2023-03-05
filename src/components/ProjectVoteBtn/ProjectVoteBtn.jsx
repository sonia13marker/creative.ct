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




export function ProjectVoteButton () {

  /*for disables button */

//   const [isDisabled, setDisabled] = useState(false);
// const [oneClick, setOneClick] = useState(0);

 const handleClick = event => {
    event.currentTarget.disabled = true;


};


  /*modal window library */
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  // let counter = 0;

  {/*если кнопка была нажата один раз - применить disabled */}
  function openModal() {
    setIsOpen(true);
    // counter = 1;
    // console.log(counter);
    
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
  function closeModal() {
    setIsOpen(false);
  }

    return (<>
    {/**setClick={() => setOneClick === 1} disabled={setOneClick === 1 ?? false} */}
        <button name="vote" id="project__vote_btn" className={style.project__btn} onClick={openModal} >Голосовать
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