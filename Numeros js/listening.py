from pynput import mouse
import sys

# Função que será chamada a cada evento de clique
def on_click(x, y, button, pressed):
    # 'pressed' é True quando o botão é pressionado (down)
    if pressed:
        print(f"Clique detectado em: X={x}, Y={y} com o botão {button}")

        # Para interromper a escuta após o primeiro clique, você pode retornar False
        return False

# Cria um listener que escuta os eventos do mouse
with mouse.Listener(on_click=on_click) as listener:
    print("Aguardando seu clique... Clique em qualquer lugar na tela.")
    # Mantém o programa rodando até que a função on_click retorne False (ou use Ctrl+C)
    listener.join()

print("Captura encerrada.")