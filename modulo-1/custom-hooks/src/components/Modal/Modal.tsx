import React, { MouseEventHandler} from "react";

export interface ModalInterface {
	visible: boolean;
	close: MouseEventHandler<HTMLSpanElement>;
}

const Modal: React.FC<ModalInterface> = ({ visible, close }) => {
	return (
		<>
			{visible && (
				<div className="overlay">
					<div className="modal" id="modal">
						<span className="close" onClick={close}>
							x
						</span>
						<h2 className='title'>Modal Window</h2>
						<div className="content">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
								deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
								non fuga omnis a sed impedit explicabo accusantium nihil
								doloremque consequuntur.
							</p>
						</div>
						<div className="actions">
							<button className="toggle-button" onClick={close}>
								OK
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
