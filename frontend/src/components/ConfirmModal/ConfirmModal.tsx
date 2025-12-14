import {
  Overlay,
  Modal,
  ModalActions,
  Button,
} from "./styles";

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ onConfirm, onCancel }: Props) {
  return (
    <Overlay>
      <Modal>
        <h3>Excluir autor?</h3>
        <p>Essa ação não poderá ser desfeita.</p>

        <ModalActions>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button danger onClick={onConfirm}>
            Excluir
          </Button>
        </ModalActions>
      </Modal>
    </Overlay>
  );
}
