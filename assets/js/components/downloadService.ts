export async function fetchDownload(url: string) {
    const rota = "/api/download/youtube";
    const reponseProps = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
    };

    try {
        const response = await fetch(rota, reponseProps);
        return await response.json();
    } catch (error) {
        console.error("Erro ao fazer o download:", error);
        return { error: "Ocorreu um erro ao tentar fazer o download", mensagem: "", downloadUrl: "" };
    }
}
