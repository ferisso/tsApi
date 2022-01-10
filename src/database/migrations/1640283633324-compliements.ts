import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class compliements1640283633324 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "compliements",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_sender",
            type: "uuid",
          },
          {
            name: "user_reciver",
            type: "uuid",
          },
          {
            name: "tag_id",
            type: "uuid",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserSenderCompliements",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_sender"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          },
          {
            name: "FKUserReceviverCompliements",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_reciver"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          },
          {
            name: "FKTagCompliments",
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            columnNames: ["tag_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL"
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("compliements")
  }

}
