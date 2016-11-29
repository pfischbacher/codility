var yourself = {
    fibonacci : function(n, computed=[0,1]) {
        if (computed.length - 1 < n)
            computed[n] =  this.fibonacci(n - 1, computed) + this.fibonacci(n - 2, computed);
        return computed[n];
    }
};
