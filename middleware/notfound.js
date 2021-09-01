const notfound = (req, res, next) => {
    return res.status(404).json({code: 404, data: 'URL Not Found'});
}

modules.export = notfound;