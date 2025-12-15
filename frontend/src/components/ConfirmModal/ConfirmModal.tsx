import {
  Overlay,
  Modal,
  ModalActions,
  Button,
} from "./styles";

interface Props {
  title: string;
  description?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  title,
  description,
  confirmText = "Confirmar",
  onConfirm,
  onCancel,
}: Props) {
  return (
    <Overlay>
      <Modal>
        <h3>{title}</h3>

        {description && <p>{description}</p>}

        <ModalActions>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button danger onClick={onConfirm}>
            {confirmText}
          </Button>
        </ModalActions>
      </Modal>
    </Overlay>
  );
}
