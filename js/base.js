// TERMINAL-X 共通スクリプト
document.addEventListener('DOMContentLoaded', () => {
    console.log("TERMINAL-X SYSTEM ONLINE");
    
    // 全ツールに自動で「HUBに戻る」を付ける
    const hubLink = document.createElement('a');
    hubLink.innerHTML = "[ RETURN TO HUB ]";
    hubLink.href = "hub.html";
    hubLink.className = "hub-link";
    document.body.appendChild(hubLink);
});

// パケットを一時保存（ローカルストレージ）
function savePacket(data) {
    localStorage.setItem('last_packet', data);
    alert("PACKET SAVED IN BASE");
}

// クリップボードへ一括コピー
function copyToClip(id) {
    const target = document.getElementById(id);
    target.select();
    document.execCommand('copy');
    alert("COPIED TO CLIPBOARD");
}
