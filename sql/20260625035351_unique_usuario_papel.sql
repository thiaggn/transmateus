-- +goose Up
alter table auth.usuarios add constraint um_papel_por_usuario unique (id, papel_id);

-- +goose Down
ALTER TABLE auth.usuarios drop constraint um_papel_por_usuario;
