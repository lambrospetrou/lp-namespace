(function() {
    var global = this;

    /**
     * Creates the namespace of properties inside the given @parent, if they do not exist.
     *
     * @param {String} ns The namespace to create, separated with dots.
     * @param {Object} parent The container to create the namespace inside.
     * @return {Object} A reference to the object representing the last segment of the namespace.
     */
    function createNamespace(ns, parent) {
        var segments = (ns || '').split('.');
        
        if (!segments.length) {
            return;
        }

        segments.forEach(function(segment, idx, array) {
            // make sure the segment does not already exist
            if (typeof parent[segment] === 'undefined') {
                parent[segment] = {};
            }
            parent = parent[segment];
        });
        return parent;
    }
    
    // Create the LP namespace to the 'this' object and the ns() method.
    createNamespace('LP', global).ns = createNamespace;

}).call(this);
