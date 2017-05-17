#NPOI
##XLXS
###将一行数据转换为字典型
    public Dictionary<string, string> GetData(XSSFSheet sheet, int row, int colMax)
    {
            Dictionary<string, string> result = new Dictionary<string, string>();
            //列名
            string[] colName = new string[9] { "","", "", "", "", "", "", "","" };
            int i;
            //读取给的row行的每一列数据
            for (i = 1; i < colMax-1; i++)
            {
                //string colName;
                if (sheet.GetRow(row).GetCell(i) != null)
                {
                    //colName = sheet.GetRow(3).GetCell(i).StringCellValue;
                    try
                    {
                        result.Add(colName[i], sheet.GetRow(row).GetCell(i).StringCellValue.ToString());
                    }
                    catch
                    {
                        result.Add(colName[i], sheet.GetRow(row).GetCell(i).NumericCellValue.ToString());
                    }

                }
            }
            return result;
        }
        
    }
