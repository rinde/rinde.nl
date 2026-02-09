publish:
    ddc clean --all
    ddc build
    cp static/CNAME public/CNAME
    cp static/robots.txt public/robots.txt

install:
    curl --proto '=https' --tlsv1.2 -LsSf https://github.com/bearcove/dodeca/releases/latest/download/dodeca-installer.sh | sh
