< !DOCTYPE html >
    <html>
        const idadeElement = document.getElementById('idade') as HTMLInputElement;
        <body>
            <h1>Verificação de Idade</h1>
            <form onsubmit="event.preventDefault(); verificarIdade();">
                <label for="idade">Qual é a sua idade?</label>
                <input type="number" id="idade" name="idade" required min="0" />
                <button type="submit">Verificar</button>
            </form>
            <p id="mensagem"></p>
        </body>
    </html>
