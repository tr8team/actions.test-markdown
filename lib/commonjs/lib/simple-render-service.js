import { Err, Ok, Res } from "./core/result.js";
class SimpleRenderService {
    #converters;
    #table;
    constructor(converters, table) {
        this.#converters = converters;
        this.#table = table;
    }
    itemToHeader(item) {
        return Res.async(async () => {
            const converted = await Promise.all(this.#converters.map((c) => c.convertHeader(item).native()));
            const top = converted.filter((x) => x != null);
            if (top.length !== 1) {
                if (top.length > 1) {
                    return Err(new Error(`Multiple converters matched ${item.data.type}`));
                }
                return Err(new Error(`No converters matched ${item.data.type}`));
            }
            return Ok(top[0]);
        });
    }
    render(input) {
        const headers = input.current.items.map((x) => this.itemToHeader(x));
        const header = Res.all(...headers).map((x) => x.join("\n\n"));
        const table = this.#table.generateTable(input.history);
        return header.andThen((currentMarkdown) => table.map((historyMarkdown) => ({
            currentMarkdown,
            historyMarkdown,
        })));
    }
}
export { SimpleRenderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXJlbmRlci1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zaW1wbGUtcmVuZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFVLE1BQU0sa0JBQWtCLENBQUM7QUFNeEQsTUFBTSxtQkFBbUI7SUFDZCxXQUFXLENBQWM7SUFDekIsTUFBTSxDQUFpQjtJQUVoQyxZQUFZLFVBQXVCLEVBQUUsS0FBcUI7UUFDeEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFpQjtRQUM1QixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsTUFBTSxTQUFTLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUM1RCxDQUFDO1lBQ0YsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLE9BQU8sR0FBRyxDQUNSLElBQUksS0FBSyxDQUFDLCtCQUErQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQzNELENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMseUJBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBVyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWtCO1FBQ3ZCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUU5RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQXVCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEMsZUFBZTtZQUNmLGVBQWU7U0FDaEIsQ0FBQyxDQUFDLENBQ0osQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uSW5wdXQsIERhdGFFbGVtZW50IH0gZnJvbSBcIi4vaW5wdXQuanNcIjtcbmltcG9ydCB7IEVyciwgT2ssIFJlcywgUmVzdWx0IH0gZnJvbSBcIi4vY29yZS9yZXN1bHQuanNcIjtcbmltcG9ydCB7IFJlbmRlclNlcnZpY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2Uvc2VydmljZS5qc1wiO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2NvbnZlcnRlci5qc1wiO1xuaW1wb3J0IHsgVGFibGVHZW5lcmF0b3IgfSBmcm9tIFwiLi9pbnRlcmZhY2UvdGFibGUtZ2VuZXJhdG9yLmpzXCI7XG5pbXBvcnQgeyBPdXRwdXQgfSBmcm9tIFwiLi9vdXRwdXQuanNcIjtcblxuY2xhc3MgU2ltcGxlUmVuZGVyU2VydmljZSBpbXBsZW1lbnRzIFJlbmRlclNlcnZpY2Uge1xuICByZWFkb25seSAjY29udmVydGVyczogQ29udmVydGVyW107XG4gIHJlYWRvbmx5ICN0YWJsZTogVGFibGVHZW5lcmF0b3I7XG5cbiAgY29uc3RydWN0b3IoY29udmVydGVyczogQ29udmVydGVyW10sIHRhYmxlOiBUYWJsZUdlbmVyYXRvcikge1xuICAgIHRoaXMuI2NvbnZlcnRlcnMgPSBjb252ZXJ0ZXJzO1xuICAgIHRoaXMuI3RhYmxlID0gdGFibGU7XG4gIH1cblxuICBpdGVtVG9IZWFkZXIoaXRlbTogRGF0YUVsZW1lbnQpOiBSZXN1bHQ8c3RyaW5nLCBFcnJvcj4ge1xuICAgIHJldHVybiBSZXMuYXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29udmVydGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRoaXMuI2NvbnZlcnRlcnMubWFwKChjKSA9PiBjLmNvbnZlcnRIZWFkZXIoaXRlbSkubmF0aXZlKCkpXG4gICAgICApO1xuICAgICAgY29uc3QgdG9wID0gY29udmVydGVkLmZpbHRlcigoeCkgPT4geCAhPSBudWxsKTtcbiAgICAgIGlmICh0b3AubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIGlmICh0b3AubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHJldHVybiBFcnIoXG4gICAgICAgICAgICBuZXcgRXJyb3IoYE11bHRpcGxlIGNvbnZlcnRlcnMgbWF0Y2hlZCAke2l0ZW0uZGF0YS50eXBlfWApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXJyKG5ldyBFcnJvcihgTm8gY29udmVydGVycyBtYXRjaGVkICR7aXRlbS5kYXRhLnR5cGV9YCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9rKHRvcFswXSBhcyBzdHJpbmcpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGlucHV0OiBBY3Rpb25JbnB1dCk6IFJlc3VsdDxPdXRwdXQsIEVycm9yW10+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gaW5wdXQuY3VycmVudC5pdGVtcy5tYXAoKHgpID0+IHRoaXMuaXRlbVRvSGVhZGVyKHgpKTtcbiAgICBjb25zdCBoZWFkZXIgPSBSZXMuYWxsKC4uLmhlYWRlcnMpLm1hcCgoeCkgPT4geC5qb2luKFwiXFxuXFxuXCIpKTtcblxuICAgIGNvbnN0IHRhYmxlID0gdGhpcy4jdGFibGUuZ2VuZXJhdGVUYWJsZShpbnB1dC5oaXN0b3J5KTtcbiAgICByZXR1cm4gaGVhZGVyLmFuZFRoZW4oKGN1cnJlbnRNYXJrZG93bikgPT5cbiAgICAgIHRhYmxlLm1hcCgoaGlzdG9yeU1hcmtkb3duOiBzdHJpbmcpID0+ICh7XG4gICAgICAgIGN1cnJlbnRNYXJrZG93bixcbiAgICAgICAgaGlzdG9yeU1hcmtkb3duLFxuICAgICAgfSkpXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaW1wbGVSZW5kZXJTZXJ2aWNlIH07XG4iXX0=