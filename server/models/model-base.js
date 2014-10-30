var database = require("./server/database"),
    model = {
        createModel: function (opt) {
            var base = Object.create(this);
            
            base.model = database.mongoose.model(opt.name,
                        new database.mongoose.Schema(opt.attr), opt.name)

            return base;
        },
        extend: function (opt) {
            for (var key in opt)
                this[key] = opt[key];
        },
        include: function (opt) {
            for (var key in opt)
                this.prototype[key] = opt[key];
        }
    };

model.extend({
    findById: function (id, cb) {
        this.model.findById(id, function (err, result) {
            if (err)
                throw new Error(err.message);

            cb(result._doc);
        });
    },
    isNew: function (instance) {
        return !(instance._id);
    },
    save: function (instance, cb) {
        if (this.isNew(instance)) {
            this.create(instance, cb);
        } else {
            this.update(instance, cb);
        }
    },
    create: function (instance, cb) {
        var doc = new this.model(instance);

        doc.save(function (err, result) {
            if (err)
                return new Error(err.message);

            cb(err, result.toObject());
        });
    },
    update: function (instance, cb) {
        this.model.findByIdAndUpdate(instance._id,
                { $set: tutil.array.exclude("_id", instance) }).lean().exec(
                function (err, result) {
                    cb(err, result);
                });
    },
    destroy: function (_id, cb) {
        this.model.remove({ _id: _id }, function (err) {
            if (err)
                throw new Error(err.message);

            cb();
        });
    }
});

module.exports = model;