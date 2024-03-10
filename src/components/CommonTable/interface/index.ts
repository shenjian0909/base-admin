import { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import type { CSSProperties } from "vue";
export type TypeProps = "index" | "expand" | "selection";
// Partial<T> 将所有的属性变为可选
// Omit<T, K> 忽略T类型中的K属性
export interface IColumnProps<T = any>
  extends Partial<Omit<TableColumnCtx<T>, "type" | "children">> {
  type?: TypeProps;
  slot?: string; // 自定义单元格内容slotName
  children?: IColumnProps<T>;
}

export interface IPage {
  pageNum: number;
  pageSize: number;
  total: number;
}

type CellStyle<T> =
  | CSSProperties
  | ((data: {
      row: T;
      rowIndex: number;
      column: TableColumnCtx<T>;
      columnIndex: number;
    }) => CSSProperties);

export interface IComTableProps {
  tableColumns: IColumnProps[];
  tableData?: any[];
  loading?: boolean; // 是否正在加载
  isPageable?: boolean; // 是否有分页
  pageInfo?: IPage;
  headerCellStyle?: CellStyle<any>;
}
