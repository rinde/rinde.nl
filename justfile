publish:
    ddc clean --all
    ddc build
    cp static/CNAME docs/CNAME
    cp static/robots.txt docs/robots.txt
    cp static/.nojekyll docs/.nojekyll

install:
    curl --proto '=https' --tlsv1.2 -LsSf https://github.com/bearcove/dodeca/releases/latest/download/dodeca-installer.sh | sh
