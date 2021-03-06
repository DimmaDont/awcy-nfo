module.exports = {
    content: [
        "build/index.html",
        "build/static/js/*.js",
    ],
    css: [
        "build/static/css/*.css"
    ],
    output: "build/static/css",
    safelist: {
        standard: [
            /col/,
            /btn-primary/,
            /btn-danger/,
            /btn-sm/,
            /btn-link/,
            /nav/,
            /form-control/,
            /form-control-sm/,
            /form-select-sm/,
            /container/,
            /alert-info/,
            /text-dark/,
            /bg-light/,
            /gap/,
            /::file-selector-button/,
        ],
    }
}
