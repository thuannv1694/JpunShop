<?php

Breadcrumbs::for('admin.dashboard', function ($trail) {
    $trail->push(__('strings.backend.dashboard.title'), route('admin.dashboard'));
});

Breadcrumbs::for('admin.category', function ($trail) {
    $trail->push(__('strings.backend.category.title'), route('admin.category'));
});

Breadcrumbs::for('admin.product', function ($trail) {
    $trail->push(__('strings.backend.product.title'), route('admin.product'));
});

Breadcrumbs::for('admin.product.created', function ($trail) {
    $trail->parent('admin.product');
    $trail->push(__('strings.backend.product.created'), route('admin.product.created'));
});

Breadcrumbs::for('admin.product.edit', function ($trail, $id) {
    $trail->parent('admin.product');
    $trail->push(__('strings.backend.product.edit'), route('admin.product.edit', $id));
});

require __DIR__.'/auth.php';
require __DIR__.'/log-viewer.php';
